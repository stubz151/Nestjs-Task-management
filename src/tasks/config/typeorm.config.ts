import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'BeastLogin',
    password: 'postgres',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};

