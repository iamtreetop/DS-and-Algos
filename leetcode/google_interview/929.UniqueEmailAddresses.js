// Every email consists of a local name and a domain name, separated by the @ sign.

// For example, in alice@leetcode.com, alice is the local name, and leetcode.com 
// is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods ('.') between some characters in the local name part of an 
// email address, mail sent there will be forwarded to the same address without dots 
// in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" 
// forward to the same email address.  (Note that this rule does not apply for 
// domain names.)

// If you add a plus ('+') in the local name, everything after the first plus sign 
// will be ignored. This allows certain emails to be filtered, 
// for example m.y+name@email.com will be forwarded to my@email.com.  
// (Again, this rule does not apply for domain names.)

// It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.  
// How many different addresses actually receive mails? 

// naive 
// time: O(N*Emails)
// space: 
// N = # of emails 
// E is avg email length

// loop through emails
// need set 
// return set.size

var numUniqueEmails = function(emails) {
    const uniqueEmails = new Set()

    for (const i of emails) {
        uniqueEmails.add(destination(i))
    }
    return uniqueEmails.size
};

const destination = (email) => {
    const dest = [];
    let isLocal = true;

    for (let i = 0; i < email.length; i++) {
        const char = email[i];

        if (isLocal) {
            if (char === ".") continue 
            else if (char === "+") {
                while(email[i+1] !== '@') 
                i++
            } else if (char === '@') {
                dest.push('@')
                isLocal = false
            } else {
                dest.push(char)
            }
        } else {
            dest.push(char)
        }
    }
    return dest.join("")
}


// Example 1:

// Input: [
//     "test.email+alex@leetcode.com",
//     "test.e.mail+bob.cathy@leetcode.com",
//     "testemail+david@lee.tcode.com"
// ]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails