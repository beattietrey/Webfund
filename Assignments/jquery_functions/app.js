$(document).ready(function () {
    console.log("ready")
    $(".hidden").hide()


    $("#first-button").click( function() {
        $("#first-button").toggle()
        $("#second-button").show()
    })

    $("#second-button").one("click", function() {
        $(this).addClass("bg-danger mt-5")
        $(this).html("I said, don't!")
        $(this).fadeOut(1500, function () {        
        $(".third").toggle()
        })
    })

    $("#third-button").click( function() {
        $(".third").toggle()
        $("#puppy-image").slideDown("slow", function() {
            $("#puppy-image").slideUp("slow", function() {
                $("#puppy-image2").slideToggle("slow", function() {
                    console.log("This worked")
                    $("#puppy-image2").slideToggle("slow", function() {
                        console.log("Second Image")
                        $("#puppy-image3").fadeIn(500, function() { 
                                $(this).before("<p class='float-left para'> You really don't listen </p>")
                                $("#fourth-button").toggle()
                            })
                        })
                    })
                })
            })
        })

        $("#fourth-button").click( function() {
            console.log("working?")
            $(".para").append("<p>One More Chance</p>")
            $(this).fadeOut(100)
            $(".para").fadeOut(1000)
            $("#puppy-image3").fadeOut(2000, function() {
                $("#last-button").toggle()
            })
        })





    })
