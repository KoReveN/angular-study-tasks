import { FormControl} from '@angular/forms';

export class EmailValidator{

    public blockMailRu(control: FormControl): {[s:string]:boolean}{
        if (control.value.endsWith("mail.ru")){
            return {"email": true};
        } 
        return null;
    }

}