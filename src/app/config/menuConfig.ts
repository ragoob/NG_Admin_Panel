import { ConfigModel } from '../core/configModel';

export class MenuConfig implements ConfigModel{
    config: any = {};

    constructor(){
        this.config = {
            aside : {
                self: {},
                items : [
                    {
						title: 'Dashboard',
						desc: 'Some description goes here',
						root: true,
						icon: 'ion-ios-home',
						page: '/',
						translate : 'MENU.DASHBOARD'
					},
					
					{
						title: 'Todo List',
						desc: 'Some description goes here',
						root: true,
						icon: 'fa fa-table',
						page: '/todo',
						translate : 'MENU.TODOLIST'
                    },
                    
                    {
						title: 'forms',
						root: true,
						bullet: 'dot',
						icon: 'ion-ios-checkbox-outline',
						translate : "MENU.FORMS.TITLE",
						submenu: [
							{
								title: 'text input field',
								page: '/forms/text-input-field',
								translate : "MENU.FORMS.TEXTINPUTFIELD.TITLE",
							},

							{
								title: 'Form',
								page: '/forms/form',
								translate : "MENU.FORMS.FORM.TITLE",
							},
							
						]
					},

					
                ]
            }
        }
    }
}