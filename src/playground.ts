import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress:'test@gmail.com',
        firstName:'hasan',
        lastName: 'hashim',


    }
})
console.log('done')