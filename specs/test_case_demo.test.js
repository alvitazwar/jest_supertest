const request = require("../request");
const payload = require("../payload")
describe('Demo', () => {
    it('should fetch the current logged-in user details with ', () => {
        return request 
        .get("")     // You can Define the endpoint and request type in this
        .expect()   // Which response are you expecting from the code
        .expect('Content-Type', /json/) // which type of content you are expecting from the response
        .then(response => {
        console.log(); 
        expect(); //  One can easily Use jest matchers to verify that
        });
    });
     it('should fetch the current logged-in user details with ', () => {
        return request 
        .post("")  //sending post requests 
        .send(payload.set_payload_for_y_request())     // payload import 
        .expect()   // Which response are you expecting from the code
        .expect('Content-Type', /json/) // which type of content you are expecting from the response
        .then(response => {
        console.log(); 
        expect(); //  One can easily Use jest matchers to verify that
        });
    });
    
});


