import mongoose from 'mongoose'

var memberSchema = new mongoose.Schema({
  
},{timestamps:true})

export default mongoose.model('member',memberSchema) 