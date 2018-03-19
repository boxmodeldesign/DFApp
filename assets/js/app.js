var root = this;

var dfLevel = 0;
$(" [data-ref='df-lv']").html(dfLevel);

function select(ref, context) {
    if (context != undefined) {
        return $(context + " [data-ref='"+ref+"']");
    } else {
        return $(" [data-ref='"+ref+"']");
    }
}

function makeCard(attrs, context) {
    var output = {};
    attrs.forEach(attr => {
        output[attr] = select(attr, context);
    });
    return output;
}

function drawCard(card) {
    // ACTIVE CARD RENDERING
    var a = "#card";
    // get all the html selectors
    var b = makeCard(["title", "flavor", "effect", "set"], a);
    // empty the previous values
    for (var prop in b) {
        if (b.hasOwnProperty(prop)) {
            b[prop].empty();
        }
    }
    b.title.html(card.name);
    b.flavor.html(card.flav);
    var currEffect = card.effect[0].text; //default to the first one
    card.effect.forEach(e => {
        if (e.lv <= dfLevel) {
            if (e.text != undefined) {
                currEffect = e.text;
            } else {
                currEffect = e.df;
            }
        }
    });
    b.effect.html(currEffect);
    b.set.html(card.set+" #"+card.id);
    $(a).show();

    // DISCARD CARD RENDERING
    var c = "#card-2";
    // get all the html selectors
    var d = makeCard(["title", "flavor", "effect", "df", "set"], c);
    // empty the previous values
    for (var prop in d) {
        if (d.hasOwnProperty(prop)) {
            d[prop].empty();
        }
    }
    d.title.html(card.name);
    d.flavor.html(card.flav);
    var currEffect = card.effect[0].text; //show only the first one
    d.effect.html(currEffect);
    card.effect.forEach(e => {
        if (e.lv > 0) {
            d.df.append("<li><strong>"+e.lv+"+</strong>: "+e.df+"</li>");
        }
    });
    d.set.html(card.set+" #"+card.id);
    $(c).show();
}

$("#draw").click(function() {
    dfLevel++;
    $(" [data-ref='df-lv']").html(dfLevel);
    card = cards[Math.floor(Math.random()*cards.length)];
    drawCard(card);
});

$("#reset").click(function() {
    dfLevel = 0;
    $(" [data-ref='df-lv']").html(dfLevel);
    $("#card").hide();
    $("#card-2").hide();
});