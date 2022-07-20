
const request = require("../request");
describe('Demo', () => {
    it('should get user details', () => {
        return request 
        .get("/api/users/2")     // You can Define the endpoint and request type in this [The URL defined in the host is [https://reqres.in]]
        .expect(200)   // Which response are you expecting from the code
        .then(response => {
        console.log(response.body);
        expect(response.body.data.id).toEqual(2);
       //  One can easily Use jest matchers to verify that
        });
    });



});