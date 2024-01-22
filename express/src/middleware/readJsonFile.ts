import * as fs from 'fs';

interface MyObject {
    id: number;
    name: string;
}

export async function readJsonFile(filePath: string): Promise<MyObject[] | null> {
    try {
        const data: string = await new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });

        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        return null;
    }
}
