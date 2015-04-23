# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


#$(document).ready ->
#  $("#subs.signup").on("ajax:success", (e, data, status, xhr) ->
#    $("#subs.signup").append xhr.responseText
#  ).on "ajax:error", (e, xhr, status, error) ->
#    $("#subs.signup").append "<p>ERROR</p>"


#$(document).on "ajax:success", "form", (xhr, data, response) ->
#   if data.error
#      for message of data
#         $('#errors ul').append '<li>' + data.error[message] + '</li>'

$(document).on "ajax:success", "form", (xhr, data, response) ->
   if data.error
      for message of data
         $('#subs ul').append '<li>' + data.error[message] + '</li>'