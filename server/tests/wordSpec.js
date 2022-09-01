import supertest from "supertest";
import app from "../index.js";

const request = supertest(app)

describe('Test users API endpoint ', () => {
    it('Get the / endpoint', async () => {
        const res = await request.get("/");
        expect(res.status).toBe(200);
    });

    it('should get list of words', async () => {
        const res = await request
            .get('/words')
            .set('Content-type', 'application/json');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(10);
    });
})
