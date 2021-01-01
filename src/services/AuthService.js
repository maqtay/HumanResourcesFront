class AuthService {

    auth(username, password) {
        return new Promise((resolve, reject) => {
            // Todo: auth işlemi tamamlanacak
            resolve(true);
        })
    }
}

export default new AuthService();