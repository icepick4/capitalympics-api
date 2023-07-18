import { PrismaClient } from '@prisma/client';
import { LearningType } from '../utils/common';

const prisma = new PrismaClient();

export const getScores = async (
    id: number,
    type: LearningType,
    continentId?: number
): Promise<{ id: number; [key: string]: number }[]> => {
    let scores = [];
    if (continentId === -1) {
        scores = await prisma.questionResult.groupBy({
            by: ['country_id', 'result'],
            where: {
                user_id: id,
                learning_type: type
            },
            _count: {
                result: true
            }
        });
    } else {
        scores = await prisma.questionResult.groupBy({
            by: ['country_id', 'result'],
            where: {
                user_id: id,
                learning_type: type,
                country: {
                    region: {
                        continent_id: continentId
                    }
                }
            },
            _count: {
                result: true
            }
        });
    }

    const scoreResults: { id: number; [key: string]: number }[] = [];

    const countriesCount = continentId
        ? await prisma.country.count({
              where: {
                  region: {
                      continent_id: continentId
                  }
              }
          })
        : await prisma.country.count();

    const arrayCountries = Array.from(Array(countriesCount).keys());

    scores.forEach((score) => {
        const countryId = score.country_id;
        const result = score.result;

        const existingScore = scoreResults.find(
            (item) => item.id === countryId
        );
        if (existingScore) {
            existingScore[result] = score._count.result;
        } else {
            const newScore = {
                id: countryId,
                succeeded: 0,
                medium: 0,
                failed: 0
            };
            newScore[result] = score._count.result;
            scoreResults.push(newScore);
        }
    });
    arrayCountries.forEach((countryId) => {
        const existingScore = scoreResults.find(
            (item) => item.id === countryId + 1
        );
        if (!existingScore) {
            scoreResults.push({
                id: countryId + 1,
                succeeded: 0,
                medium: 0,
                failed: 0
            });
        }
    });
    return scoreResults;
};
