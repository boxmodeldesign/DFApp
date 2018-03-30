var root = this;

function buildDeck(source) {
    var pool =[];
    for (i=0;i<source.length;i++) {
        pool.push(source[i]);
    }
    var reps = pool.length;
    var deck = [];
    for (i=0; i<reps; i++) {
        j = Math.ceil(Math.random()*pool.length)-1;
        deck.push(pool[j]);
        pool.splice(j, 1);
    }
    // logging
    for (i=0;i<deck.length;i++) {
        console.log((i+1)+". "+deck[i].name);
    }

    $("[data-ref='deck']").html(deck.length);
    return deck;
}

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
    if (deck.length <= 0) {
        init();
        return;
    }
    dfLevel++;
    $(" [data-ref='df-lv']").html(dfLevel);
    drawCard(deck[0]);
    deck.splice(0, 1);
    $("[data-ref='deck']").html(deck.length);
});

$("#reset").click(function() {
    init();
});

$("[data-toggle='collapse']").click(function() {
    var test = $(this).children(".arrow-toggle").html();
    $(this).children(".arrow-toggle").html(
        test == "▾" ? "▸" : "▾"
    );
});

function cardList(cards) {
    var output = "";
    var sets = [];
    cards.forEach(card => {
        var match = false;
        for (i=0;i<sets.length;i++) {
            if (sets[i].name.indexOf(card.set) != -1) {
                match = true;
                sets[i].cards.push(card);
                break;
            }
        };
        if (!match) {
            sets.push({name: card.set, cards: [card]});
        }
    });
    sets.forEach(set => {
        output += '<div class="custom-control mt-2"><strong>'+set.name+'</strong> ('+set.cards.length+')</div>';
        set.cards.forEach(card => {
            var badge;
            if (card.type == "uq") {
                badge = ' <span class="badge badge-pill badge-warning">UQ</span>';
            } else if (card.type == "sp") {
                badge = ' <span class="badge badge-pill badge-success">SP</span>';
            } else {
                badge = '';
            }
            output += '<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="'+card.set+card.id+'"><label class="custom-control-label" for="'+card.set+card.id+'">'+card.id+'. '+card.name+badge+'</label></div>'
        });
    });
    $("[data-ref='card-list']").html(output);
}

$("[data-ref='build-deck']").click(function() {
    var decklist = [];
    for (i=0;i<cards.length;i++) {
        var id = cards[i].set+cards[i].id;
        if ($("#"+id).prop("checked")) {
            decklist.push(cards[i]);
        }
    }
    if (decklist.length == 0) {
        console.log("There are no cards in the deck!");
    } else {
        deck = buildDeck(decklist);
        console.log("Deck built!");
    }
});

function init() {
    $("#card").hide();
    $("#card-2").hide();
    dfLevel = 0;
    $(" [data-ref='df-lv']").html(dfLevel);
    deck = buildDeck(cards);
}

// Initialize
var dfLevel, deck;
init();

cardList(cards);