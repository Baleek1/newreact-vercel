export const API_KEY = 'AIzaSyAh6b_XeSj3vXCV7KCQS5XDwyBvvX4XHXs'

export const value_converter = (value) => {
    if(value>1000000)
    {
        return Math.floor(value/10000) + 'M'
    }
    else if (value>=1000)
    {
        return Math.floor(value/1000)+'K' 
        }
        else{
            return value;
        }
}