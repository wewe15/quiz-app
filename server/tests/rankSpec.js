import supertest from "supertest";
import app from "../index.js";

const request = supertest(app)

describe('Test users API endpoint ', () => {
    it('should get a rank depend on his score', async () => {
        const res = await request
            .post('/rank')
            .set('Content-type', 'application/json')
            .send({
                score: 90
            });
        expect(res.status).toBe(201);
        expect(res.body).toBe(80);
    });
})
