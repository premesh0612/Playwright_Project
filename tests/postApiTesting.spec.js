import { test, expect } from '@playwright/test';

test('POST API Test', async ({ request }) => {

    const token = 'your_token_here';

    // Request Body
    const requestBody = {
        title: 'Playwright API',
        body: 'Learning POST API Testing',
        userId: 101
    };

    // POST Request
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts', { headers: { Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            data: requestBody         //call request body
        }
    );

    // Status Code
    console.log(response.status());

    // Full Response Body
    console.log(await response.json());

    // Status Code Validation
    expect(response.status()).toBe(201);

    // Response Body Convert into JSON
    const responseBody = await response.json();

    // Response Body Validation
    expect(responseBody.title).toBe('Playwright API');
    expect(responseBody.body) .toBe('Learning POST API Testing');
    expect(responseBody.userId).toBe(101);

    // Header Validation
    console.log(response.headers()['content-type']);

    expect(response.headers()['content-type'])
    .toContain('application/json');

});