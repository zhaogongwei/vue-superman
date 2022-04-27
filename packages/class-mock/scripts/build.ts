import {buildUtils} from 'superman-shared'
import {minifyConfig, unMinifyConfig, packagePath} from '../vite.config'

buildUtils.build({
  minifyConfig,
  unMinifyConfig,
  packagePath
})
