export default{template:`
<button :class ="{
    'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
    'bg-blue-200 hover:bg-blue-400': type =='primary',
    'bg-purple-200 hover:bg-purple-400': type =='secondary',
    'bg-red-200 hover:bg-red-400': type =='danger',
    'is-loading': processing
}" 
    :disabled="processing"
    >
<slot/>
</button>
`
,

props:{
    type:{
        type: String,
        default: 'primary'
    },
    processing:{
        type: Boolean,
        default: false
    }
}


}