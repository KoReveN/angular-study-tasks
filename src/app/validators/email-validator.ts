import { FormControl} from '@angular/forms';

export class EmailValidator{

    public blockMailRu(control: FormControl): {[s:string]:boolean}{
        if (control.value.endsWith("mail.ru")){
            return {"mailrublock": true};
        } 
        return null;
    }

}