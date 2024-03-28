import mongoose from 'mongoose'

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Successfully connected to MongoDB')
  } catch (error) {
    console.log('Error during connect to MongoDB', error.message)
  }
}

export default connectToMongoDB
