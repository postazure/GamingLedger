# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Group.create(name:"Thursday Night", owner_id:1)
Group.create(name:"Monthly Group", owner_id:1)
Group.create(name:"Not My Group", owner_id:2)
