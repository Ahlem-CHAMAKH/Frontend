import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, Validators, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import jwtDecode, {JwtPayload} from "jwt-decode";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string = "";
    password: string = "";
    message: string = "";
    loginForm!: UntypedFormGroup;
    loading!: boolean;

    constructor(private router: Router,
        private titleService: Title,
        private notificationService: NotificationService,
        private authService: AuthenticationService, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.titleService.setTitle('angular-material-template - Login');
        this.authService.logout();
        this.createForm();
    }

    private createForm() {
        const savedUserEmail = localStorage.getItem('savedUserEmail');

        this.loginForm = new UntypedFormGroup({
            email: new UntypedFormControl(savedUserEmail, [Validators.required, Validators.email]),
            password: new UntypedFormControl('', Validators.required),
            rememberMe: new UntypedFormControl(savedUserEmail !== null)
        });
    }


    public login(): void {
        sessionStorage.removeItem("app.token");

        this.authService.login(this.username, this.password)
            .subscribe({
                next: (token) => {
                    sessionStorage.setItem("app.token", String(token));

                    const decodedToken = jwtDecode<JwtPayload>(String(token));
                    // @ts-ignore
                    sessionStorage.setItem("app.roles",  decodedToken.scope);
                    sessionStorage.setItem("currentUser",  this.username);


                    this.router.navigateByUrl("''");
                },
                error: (error) => this.snackBar.open(`Login failed: ${error.status}`, "OK")
            });
    }

    resetPassword() {
        this.router.navigate(['/auth/password-reset-request']);
    }
}
