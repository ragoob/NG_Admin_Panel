import { ConfigModel } from '../core/configModel';

export class LayoutConfig implements ConfigModel{
    config: any = {};
    constructor(){
        this.config = {
            header : {
                logo : {
                    image : 'assets/img/logo-en.png',
                    alt : 'Techno Ways Logo'
                }
            }
        }
    }

}