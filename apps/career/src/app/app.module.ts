import { Module } from '@nestjs/common';

import { CommonsModule } from './commons/commons.module';
import { DatabaseModule } from './database/database.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    CommonsModule,
    DatabaseModule,
    IntegrationsModule,
    ModulesModule,
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
