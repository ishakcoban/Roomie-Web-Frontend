export class AuthService {
    loggedIn:boolean = localStorage.getItem('loggedIn') == null ? false : true;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=>{
                    resolve(this.loggedIn)
                },800);
            }
        )

        return promise;
    }

    setToken(){
        localStorage.setItem('loggedIn','true');
        this.loggedIn = true;
    }

    logout(){
        localStorage.removeItem('loggedIn');
        this.loggedIn = false;
    }
}