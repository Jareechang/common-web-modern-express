import express from 'express';

const app = express()
const port = 3000

class People {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface ApiResponse<T> {
    data: T;
}

type CompanyApiResponse = ApiResponse<Array<People>>;

function fetchData(): Promise<CompanyApiResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    new People("Bob", 32),
                    new People("Judy", 33),
                    new People("Jill", 28),
                    new People("Sally", 22)
                ]
            })
        }, 2500);
    });
}

app.get('/api/test', async(req, res) => {
    let response : ApiResponse<CompanyApiResponse> = await fetchData() ?? {};
    res.json(response);
});

app.listen(port, () => console.log(`running api on port ${port}!`));
