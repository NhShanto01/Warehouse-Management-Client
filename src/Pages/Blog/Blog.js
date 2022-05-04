import React from 'react';
import PageName from '../Shared/PageName/PageName';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container'>
            <PageName title="Blog"></PageName>
            <h1>Blog Collection</h1>
            <div className='blog'>
                <h3>Q.1 : What is the difference between SQL and NoSQL ?</h3>
                <p>
                    SQL databases are related, and NoSQL databases are unrelated.

                    SQL Database uses structured query language and has a default schema.The NoSQL database contains dynamic schemas for unorganized data.

                    SQL databases based on are vertically scalable, while NoSQL databases based on are horizontally scalable.

                    SQL databases are table-based, while NoSQL databases store documents, key values, graphs, or wide columns.

                    SQL databases are good for multi-row transactions, while NoSQL is good for unstructured data like documents or JSON.
                </p>

            </div>
            <div className='blog'>
                <h3>Q.2 : What is the purpose of jwt and how does it work?</h3>
                <p>
                    JWT (JSON Web Token) is an open value that is used to share security information between two parties - a client and a server.
                    Each JWT contains an encoded JSON object, which contains a set of claims.
                    JWTs are signed using a cryptographic algorithm to ensure that claims cannot be changed after the token is issued.

                    Unlike all other web tokens, JWT contains a set of claims.
                    Used to transmit information between two parties to a claim.
                    This claim depends on the use of the hand. For example, a claimant may claim who gave the token, how long it may be valid, or what permission has been granted to the client.
                </p>

            </div>
            <div className='blog'>
                <h3>Q.3 : When should you use node.js and when should you use mongodb?</h3>
                <p>
                    Any project requires a programming environment and a runtime library that provides you with basic programming tools / support and can compile or interpret your code.

                    Nodejs is an example tool for JavaScript programming languages.

                    There are other similar tools for other languages like Python, Java, PHP, C #, C ++, Go, etc.

                    So, if you want to write any kind of standalone program or server in JavaScript, you can use nodes for it.


                    If your application needs the ability to constantly store data so that you can search efficiently or update it, you will usually use some form of a database.

                    There are dozens of popular databases. MongoDB is such a database. (MariaDB, MySql, CouchDB, DynamoDB (in AWS), and Postgres) are examples of other databases.

                    Different databases have different strengths (the things they are the best) and different ways to use them so choosing the right / best database for what you are doing is entirely up to your decision.
                </p>

            </div>

        </div>
    );
};

export default Blog;