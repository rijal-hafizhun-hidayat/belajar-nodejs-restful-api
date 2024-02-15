import supertest from "supertest";
import web from "../src/app/web.js";
import { prismaClient } from "../src/app/database.js";

describe('POST api/user', function(){

    afterEach(async () => {
        await prismaClient.user.deleteMany({
            data: {
                username: 'bebs21'
            }
        })
    })

    it('should can register user', async () => {
        const result = await supertest(web)
            .post('/api/user')
            .send({
                username: 'bebs21',
                password: 'cirebon123'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('bebs21');
        expect(result.body.data.password).toBeUndifined();
    })
})