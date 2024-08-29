
function is_number(char)
{
    let all_num = '0123456789'
    if (all_num.includes(char))
        return true;
    return false;
}

function is_operator(char)
{
    let all_op = '+-*/'
    if (all_op.includes(char))
        return true;
    return false;
}

function is_valid(full_exp)
{
    for(let i = 0; i < full_exp.length; i++)
    {
        if(!(is_number(full_exp[i])) && !(is_operator(full_exp[i])))
            return false;
    }
    return true;
}

document.getElementById("btn").onclick = function()
{
    let exs = document.getElementById("exp").value;
    exs = exs.trim();

    if(!(is_valid(exs)))
        return;
    
    document.getElementById("res").innerHTML = "result: " + eval(exs);
}