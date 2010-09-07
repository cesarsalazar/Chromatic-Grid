require 'rubygems'
require 'sinatra'
require 'haml'
require 'json'
require 'pony'



get '/' do
  @title = 'Estructuras de colores  |  La obra de Fernando Salazar'
  haml :index
end

get '/gallery' do
  @title = 'Galería  |  Estructuras de colores'
  haml :gallery
end

# Get params and receive email
get '/mail' do
            
  Pony.mail(
    :to             => 'cesar@42claps.com',
    :from           => 'i.am@cesarsalazar.mx',
    :subject        => 'Howdy, Partna!',
    :body           => 'Sweet!',
    :via            => :smtp, 
    :via_options => {
    :address        => 'smtp.sendgrid.net',
    :port           => '25',
    :user_name      => ENV['SENDGRID_USERNAME'],
    :password       => ENV['SENDGRID_PASSWORD'],
    :authentication => :plain, 
    :domain         => ENV['SENDGRID_DOMAIN'],
    }
  )  
  
end

get '/global.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :global
end



