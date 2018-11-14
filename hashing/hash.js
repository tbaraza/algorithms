/**
 * A hashing algorithm's goal is to generate a safe hash
 * A hash ia a value that's computed from a base input number using a hash function
 *
 * Hashing algorithm
 * This is a mathematical algorithm that maps data of arbitrary size to a hash
 * of a fixed size
 *
 * Ideal cryptographic hash function should be:
 *  - fast to compute hash value for any kind of data
 *  - impossible to generate a message from its hash value - Pre-Image Resistance
 *  - avoid hash collisions i.e two different messages having the same hash - Collision Resistance - Second Pre-Image Resistance
 *  - every change to a message should change the hash value
 *
 * We use hash functions for
 *  - digital signatures
 *  - message auth codes(MAC)
 *  - Indexing data in hash table
 *  - for finger printing
 *  - identifying files
 *  - detecting duplicates or as checksums(detect if a sent file didn't suffer)
 *    accidental or intentional data corruption
 *
 * Hashing algorithms
 *  - MD5 Message Digest
 * This algorithm is compromised. One of the vulnerabilities is that you can
 * the meesage from it's hash value
 *  - SHA-family Secure Hash
 *    - SHA-0(1993) has been compromised too
 *    - SHA-1(1995)
 *    - SHA-2 - safe has 6 hash functions:
 *      SHA-224, SHA-256 or 512 bits: SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256.
 *    - SHA-3(2015) -
 *
 */
