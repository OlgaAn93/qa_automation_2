import { test, expect } from '@playwright/test';


test('async functions and then1', async ({ page }) => {
    new Promise<number>(function (resolve, reject) {

        setTimeout(() => resolve(1), 1000);

    }).then(function (result: number) {

        console.log(result);
        return result * 2;

    }).then(function (result: number) {

        console.log(result);
        return result * 2;

    }).then(function (result: number) {

        console.log(result);
        return result * 2;

    });

});

test('async functions and then2', async ({ page }) => {
    const myPromise: Promise<string> = new Promise<string>((resolve, reject) => {
        const url = 'https://demoqa.com/login';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });

    myPromise
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

test('async functions and then3', async ({ page }) => {
    const myPromise: Promise<string> = new Promise<string>((resolve, reject) => {
        const delay = 2000; // 2 seconds
        setTimeout(() => {
            resolve(`Operation completed after ${delay} milliseconds`);
        }, delay);
    });

    myPromise
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

test('async functions and then4', async ({ page }) => {
    // Synchronous function 
function multiplySync(a: number, b: number): number {
    return a * b;
  }
  
  // Asynchronous function that calls the synchronous function
  async function multiplyAsync(a: number, b: number): Promise<number> {
    // await before calling the synchronous function
    const result = await multiplySync(a, b);
    return result;
  }
  
  multiplyAsync(5, 3)
    .then(result => {
      console.log('Result:', result); 
    })
    .catch(error => {
      console.error('Error:', error); 
    });
});
