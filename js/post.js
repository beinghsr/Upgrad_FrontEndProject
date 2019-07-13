var btnText = document.getElementById('edit-save-btn');
var title = document.getElementById('title-edit');
var content = document.getElementById('content-edit');
function editSave(){
    if(btnText.innerHTML === 'Edit' ){
        btnText.innerHTML = 'Save';
        title.setAttribute('contenteditable','true');
        content.setAttribute('contenteditable','true');
        setCarretPosition();
    } else {
        btnText.innerHTML = 'Edit';
        title.setAttribute('contenteditable','false');
        content.setAttribute('contenteditable','false');
        alert('Changes Saved');
    }
}

function setCarretPosition() {
    var node = content,
       textNode = node.firstChild,
       caret = textNode.length,
       range = document.createRange(),
       sel = window.getSelection();
 
    node.focus();
 
    range.setStart(textNode, caret);
    range.setEnd(textNode, caret);
 
    sel.removeAllRanges();
    sel.addRange(range);
 }

var clicks = 0;
 
function likeFn(){
    clicks += 1;
    document.getElementById('like-count').innerHTML = clicks + ' people like this!';
    document.getElementById('like-btn').innerHTML = 'Liked';
}

var newComment = document.getElementById('comment-content');
var commentBlock = document.getElementById('all-comments');

function commentFn(){
    console.log(newComment.value);

    if(newComment.value === ""){
        alert("Comment cannot be empty.");
    } else {
        commentBlock.style.display = "block";

        var newCommentDiv = document.createElement('div');
        var newCommentP = document.createElement('p');

        newCommentP.innerHTML += newComment.value;
        newCommentDiv.appendChild(newCommentP);

        newCommentDiv.setAttribute('class','final-comment');

        var allCommentsContainer = document.getElementById('comment-container');
        allCommentsContainer.insertBefore(newCommentDiv, allCommentsContainer.childNodes[0]);

        newComment.value = "";
    }
    
}

