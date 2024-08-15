export const catchAsyncError =(thefunction) =>{
    return (req ,res, next) =>{
        Promise.resolve(thefunction(req, res, next)).catch(console.error);
       
    };
};