function signup(userName) {
    const users = ["Alice", "Bob", "Charlie"]; 

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

// Example usage
console.log(signup("Alice")); 
console.log(signup("David")); 
