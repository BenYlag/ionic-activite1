import * as firebase from 'firebase/app';

export class AuthService {
    isAuth = false;

    constructor() {
        firebase.auth().onAuthStateChanged((user) => {
            this.isAuth = !!user;
        });
    }

    signUpUser(email: string, password: string) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
                (user) => {
                    resolve(user);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    signInUser(email: string, password: string) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(
                (user) => {
                    resolve(user);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    signOut() {
        firebase.auth().signOut();
    }

}
