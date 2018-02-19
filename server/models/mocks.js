import mongoose from 'mongoose'
import faker from 'faker'
import Users from './users'

class MockData {
    constructor (entires = 10) {
        this.entires = entires
        this.data = []
    }

    async generate () {
        let currentUser = {}
        try {
            for (let id = 1; id <= this.entires; id++) {
                let firstName = faker.name.firstName()
                let lastName = faker.name.lastName()
                currentUser = {
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    age: faker.random.number({ min: 18, max: 50 }),
                    avatar: faker.internet.avatar(),
                    phoneNumber: faker.phone.phoneNumberFormat(0),
                    weight: faker.random.number({ min: 150, max: 250 }) + 'lbs.',
                    credentials: {
                        email: faker.internet.email(firstName, lastName),
                        password: faker.internet.password()
                    },
                    location: {
                        address: faker.address.streetAddress(),
                        city: faker.address.city(),
                        state: faker.address.state(),
                        zip: faker.address.zipCode()
                    },
                    occupation: {
                        title: faker.name.jobTitle(),
                        salary: faker.random.number({ min: 37575, max: 120570 })
                    }
                }
                this.data.push(currentUser)
            }
            return this.data
        } catch (error) {
            console.log(error)
        }
    }

    async dropTable () {
        await Users.deleteMany({}).exec()
    }

    async insert (data) {
        try {
            await Users.insertMany(data)
        } catch (error) {
            console.log(error)
        }
    }
}

export default async (entries) => {
    try {
        const mockUsers = new MockData(entries)
        await mockUsers.dropTable()
        const fakeData = await mockUsers.generate()
        await mockUsers.insert(fakeData)
        console.log(`Bulk insert of ${entries} entries complete.`)
    } catch (error) {
        console.log(error)
    }
}
