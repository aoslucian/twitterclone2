// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'tweet',
//   title: 'Tweet',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'text',
//       title: 'Text in tweet',
//       type: 'string',
//     }),
//     defineField({
//       name: 'blockTweet',
//       title: 'Block Tweet',
//       description: 'ADMIN Controls: Toggle if tweet is deemend inappropriate',
//       type:'boolean',
//     }),
//     defineField({
//       name: 'username',
//       title: 'Username',
//       type: 'string',
//     }),
//     defineField({
//       name: 'profileImg',
//       title: 'Profile Image',
//       type: 'string',
//     }),
//     defineField({
//       name: 'image',
//       title: 'Tweet Image',
//       type: 'string',
//     }),
//   ],

// })
  



export default{
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'ADMIN Controls: Toggle if tweet is deemend inappropriate',
      type:'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    },
  ],

}