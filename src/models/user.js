/**
 * just an exemple
 */


const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const validator=require('validator')

//@see https://mongoosejs.com/docs/schematypes.html


const userSchema=new mongoose.Schema({

    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,   
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    password:{
        tye:String,
        required:true,
        trim:true,
        minlength:6,
    },
    tokens:[{
         token:{
             Type:String,
             required:true,
         }
    }]

})

/*method for login*/
userSchema.statics.findByCredentials=async (email,password)=>{
    const user=await User.findOne({email})

    if(!user){
        throw new Error('unable to login')
    }

    const isMatch =await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}
/*token generator method*/
userSchema.methods.generateAuthToken= async function(){
    const user=this

    const token = jwt.sign({_id : user._id.toString() },process.env.JWT_SECRET,{expiresIn:'24 hours'})

    user.tokens=user.tokens.concat({token})
    await user.save()

    return token
}

/*modify user return value for api*/
userSchema.methods.toJSON=function(){

    const user=this
    const userObject=user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject

}

//hash the plain text pwd before saving
userSchema.pre('save',async function(next){
    const user=this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }

    next()
})




const User=mongoose.model('User',userSchema)

module.exports=User