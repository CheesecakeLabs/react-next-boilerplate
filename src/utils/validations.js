export default {
  required: {
    rule: /[^\s]+/,
    message: 'This field is required'
  },
  email: {
    rule: /^([\w_+.]+)@[\w_]+\.\w{2,}(?:\.\w{2})?$/,
    message: 'Invalid email format'
  },
  url: {
    rule: /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/,
    message: 'Invalid URL format'
  }
}
