import express from 'express';

const app = express();
const port = 3000;

interface PeopleData {
    name: string;
    age: number;
}

class People {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface ApiResponse<T> {
    data: T | null;
}

type CompanyApiResponse = ApiResponse<Array<PeopleData>>;

function fetchData(): Promise<CompanyApiResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    new People('Bob', 32),
                    new People('Judy', 33),
                    new People('Jill', 28),
                    new People('Sally', 22)
                ]
            });
        }, 2500);
    });
}

app.get('/api/test', async (req, res) => {
    const defaultResponse: CompanyApiResponse = {
        data: null
    };
    let response: CompanyApiResponse = (await fetchData()) ?? defaultResponse;
    res.json(response);
});

app.listen(port, () => console.log(`running api on port ${port}!`));
