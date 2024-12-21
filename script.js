console.log(`let's Write Java Script`);


async function main(){

    let a = await fetch("file:///C:/Users/singh/OneDrive/Desktop/coding/basic/songs/")
    let response = await a.text();
    console.log(response)
}
main()