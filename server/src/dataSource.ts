import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nodereactmovies',
      synchronize: false,
    // type: "postgres",
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "postgres",
    // database: "nodereactmovies",
    entities: ['dist/**/*.entity.{.js,.ts}'],
    migrations: ["dist/migrations/*.js"]
    
})
AppDataSource.initialize();
