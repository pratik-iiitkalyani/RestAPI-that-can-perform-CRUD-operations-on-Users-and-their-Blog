const Bcrypt = require('bcrypt')
const SaltRounds = 10

async function encryptData(myPlaintextPassword) {

	salt = await Bcrypt.genSalt(SaltRounds)
	hash = await Bcrypt.hash(myPlaintextPassword, salt)
	return hash
}

async function decryptData(myPlaintextPassword, hash) {
	res = Bcrypt.compare(myPlaintextPassword, hash)
	return res
}

module.exports = {
	encryptData,
	decryptData
}