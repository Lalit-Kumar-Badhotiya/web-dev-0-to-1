import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async  function insert_user(username:string, password:string, firstname:string, lastname:string){
    const insert = await prisma.user.create({
        data:{
            username,
            password,
            firstname,
            lastname
        }
    });
    console.log(insert)

    const alluser = await prisma.user.findMany();
    console.log(alluser)
}

insert_user("lalit222" ,"lalit","lalit", "lalit");




















// async function createUser(){
//     const newUser = await prisma.User.create({
//   data: {
//     username: "Alice",
//     email: "alice@prisma.io",
//   },
// });

// const users = await prisma.user.findMany();

// }

