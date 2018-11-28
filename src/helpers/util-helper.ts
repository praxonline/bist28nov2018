import {Injectable} from "@angular/core";

@Injectable()
export class UtilHelper {
  validateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/;

    return expr.test(email);
  }

  validateAlpha(text) {
    var expr = /[a-z]/i;
    return expr.test(text);
  }

  validateText(text) {
    var expr = /^[a-zA-Z() ]+$/;
    return expr.test(text);
  }

  validateNumber(text) {
    var expr = /^\d+$/;
    return expr.test(text);
  }
}
