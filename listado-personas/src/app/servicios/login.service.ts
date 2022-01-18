import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app'
import { async } from "@angular/core/testing"

@Injectable()
export class LoginService{
    token: string = ""
    autorizado: boolean = false;

    constructor(private afauth: AngularFireAuth, private router: Router){}

    async login(email: string, password: string){ 
        try{
            this.afauth.signInWithEmailAndPassword(email, password).then(res=>{
                if(res!=null){
                    this.afauth.authState.subscribe(
                        resultado => {
                            if(resultado)
                            {
                                if(resultado.email != null) {
                                    this.autorizado = true
            
                                    this.afauth.idToken.subscribe(
                                        resultado =>{
                                            if(resultado!=null){
                                                this.token = resultado
                                                this.router.navigate(['/'])
                                            }    
                                        }
                                    )
                                }
                            }
                        }
                    )
                }
            });
        }
        catch(err){
            console.log("error en login: ", err);
        }
           
    }

    getIdToken():string{ 
        return this.token;
    }

    logout():void{
        this.afauth.signOut().then(
            ()=>{
                this.autorizado = false;
                this.token = "";
                this.router.navigate(['login'])
            }
        )
    }

    getAutenticado():boolean{
        return this.autorizado;
    }
}