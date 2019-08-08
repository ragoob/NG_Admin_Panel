import { ConfigModel } from '../core/configModel';

export class PagesConfig implements ConfigModel{
    config: any = {};
  constructor(){
    this.config = {
        '/': {
            page: {
                title: 'Dashboard',
                translate : 'MENU.DASHBOARD'

            }
        },

        todo: {
            page: {
                title: 'Todo List',
                translate : 'MENU.TODO'

            }
        },

        forms : {
            "text-input-field" : {
                page: { 
                    title: 'Accordion',
                    translate : 'MENU.FORMS.TEXTINPUTFIELD.TITLE'
                }
            },
            "form" : {
                page: { 
                    title: 'Form',
                    translate : 'MENU.FORMS.FORM.TITLE'
                }
            }
        }
  }

}
}