import { test, expect } from '@playwright/test';

test('GET API Test', async ({ request }) => {

     const token = 'your_token_here';

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1',{ headers: {Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        }
    );

    console.log(await response.status());   //status code show hote
    console.log(await response.json());     // purn playload body show hote
    
    expect(response.status()).toBe(200);      //status code validate hote

    // Response Body convert into JSON
    const responseBody = await response.json();

    // Body Parameter Validation
    expect(responseBody.userId).toBe(1);
    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toContain('sunt');
    expect(responseBody.body).toContain('quia');

     // Header Validation
 
     console.log(await response.headers()['content-type']);

    expect(response.headers()['content-type'])
    .toContain('application/json');
});